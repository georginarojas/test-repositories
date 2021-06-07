import { createContext, ReactNode, useState, useContext } from "react";
import { api } from "../service/api";
import { toast } from "react-toastify";
import { error } from "console";

interface RepositoryProviderProps {
  children: ReactNode;
}

interface Repository {
  name: string;
  description: string;
  url: string;
}

interface RepositoryContextData {
  repositories: Repository[];
  repositoriesTotal: number | undefined;
  isLoadingGet: boolean;
  isLoadingPost: boolean;
  status: string | undefined;
  getRepositories: (page: number) => void;
  postRepositoryAndSendEmail: (
    name: string,
    description: string,
    url: string,
    email: string
  ) => Promise<string>;
}

export const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData
);

export function RepositoryProvider({ children }: RepositoryProviderProps) {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repositoriesTotal, setRepositoriesTotal] =
    useState<number | undefined>(undefined);
  const [isLoadingGet, setIsLoadingGet] = useState<boolean>(false);
  const [isLoadingPost, setIsLoadingPost] = useState<boolean>(false);
  const [status, setStatus] = useState<string | undefined>(undefined);

  async function getRepositories(page: number) {
    try {
      console.log("PAGE ", page);
      setIsLoadingGet(true);
      const response = await api.get(`/repositories?page=${page}`);
      setIsLoadingGet(false);

      if (!response.data) {
        throw new Error();
      }

      setRepositories(response.data.data.repositoryList);
      setRepositoriesTotal(response.data.data.count);
    } catch (error) {
      toast.error("Error no carregamento dos repositórios");
    }
  }

  async function postRepositoryAndSendEmail(
    name: string,
    description: string,
    url: string,
    email: string
  ) {
    try {
      setIsLoadingPost(true);
      const response = await api.post("/send", {
        name: name,
        description: description,
        url: url,
        email: email,
      });
      setIsLoadingPost(false);

      console.log("hooks response ++++", response);

      if (response.data.status !== "success") {
        return response.data.status;
      }

      return response.data.status;
    } catch (error) {
      setIsLoadingPost(false);
      toast.error("Não foi possible enviar o email");
    }
  }

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        repositoriesTotal,
        getRepositories,
        isLoadingGet,
        isLoadingPost,
        status,
        postRepositoryAndSendEmail,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
}

export function useRepository(): RepositoryContextData {
  const context = useContext(RepositoryContext);

  return context;
}

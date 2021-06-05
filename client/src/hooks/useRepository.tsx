import { createContext, ReactNode, useState, useContext } from "react";
import { api } from "../service/api";
import { toast } from "react-toastify";

interface RepositoryProviderProps {
  children: ReactNode;
}

interface Repository {
  name: String;
  description: string;
  url: string;
}

interface RepositoryContextData {
  repositories: Repository[];
  repositoriesTotal: number | undefined;
  isLoading: boolean;
  getRepositories: (page: number) => void;
}

export const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData
);

export function RepositoryProvider({ children }: RepositoryProviderProps) {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repositoriesTotal, setRepositoriesTotal] =
    useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getRepositories(page: number) {
    try {
      console.log("HOOKS ", isLoading, page);
      setIsLoading(true);
      const response = await api.get(`/repositories?page=${page}`);

      if (!response.data) {
        throw new Error();
      }

      setRepositories(response.data.data.repositoryList);
      setRepositoriesTotal(response.data.data.count);
      setIsLoading(false);

    } catch (error) {
      toast.error("Error no carregamento dos repositorios");
    }
  }

  return (
    <RepositoryContext.Provider
      value={{ repositories, repositoriesTotal, getRepositories, isLoading }}
    >
      {children}
    </RepositoryContext.Provider>
  );
}

export function useRepository(): RepositoryContextData {
  const context = useContext(RepositoryContext);

  return context;
}

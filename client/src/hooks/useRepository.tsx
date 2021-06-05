import { createContext, ReactNode, useState, useContext } from "react";
import { api } from "../service/api";

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
  getRepositories: (page: number) => void;
}

export const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData
);

export function RepositoryProvider({ children }: RepositoryProviderProps) {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repositoriesTotal, setRepositoriesTotal] =
    useState<number | undefined>(undefined);

  async function getRepositories(page: number) {
    try {
      const response = await api.get(`/repositories?page=${page}`);

      if (!response.data) {
        throw new Error();
      }

      // console.log("HOOKS ", response.data.data.repositoryList);
      setRepositories(response.data.data.repositoryList);
      setRepositoriesTotal(response.data.data.count);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <RepositoryContext.Provider
      value={{ repositories, repositoriesTotal, getRepositories }}
    >
      {children}
    </RepositoryContext.Provider>
  );
}

export function useRepository(): RepositoryContextData {
  const context = useContext(RepositoryContext);

  return context;
}

import React, {createContext, useState, FC} from 'react';

interface DataProviderType {
  select: string;
}

export interface ProviderType extends DataProviderType {
  setSelect: (value?: string) => void;
}

const initialState: DataProviderType = {
  select: 'new',
};

export const AppContext = createContext<ProviderType>(
  initialState as ProviderType,
);

export const AppProvider: FC = ({children}) => {
  const [select, setSelect] = useState(initialState.select);
  return (
    <AppContext.Provider value={{select, setSelect}}>
      {children}
    </AppContext.Provider>
  );
};

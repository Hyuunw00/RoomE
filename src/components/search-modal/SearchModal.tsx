import React from 'react';
import { SearchInput } from './SearchInput';
import { SearchList } from './SearchList';
import { SearchResult } from './SearchResult';
import { useSearch } from '@/hooks/useSearch';
import type { SearchItemType } from '@/types/search';
import ModalBackground from '@/components/ModalBackground';
import { SEARCH_THEME } from '@/constants/searchTheme';

interface SearchModalProps {
  title: string;
  onClose: () => void;
  type: 'CD' | 'BOOK';
  onSelect: (item: SearchItemType) => void;
}

export const SearchModal = ({
  title,
  onClose,
  type,
  onSelect,
}: SearchModalProps) => {
  const { query, setQuery, results, isLoading, error } = useSearch(type);
  const [selectedItem, setSelectedItem] = React.useState<SearchItemType | null>(
    null,
  );
  const theme = SEARCH_THEME[type];

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  return (
    <ModalBackground onClose={onClose}>
      <div className='p-4 border-2 border-white bg-white/30 filter-blur rounded-3xl w-[1000px]'>
        <div className='w-full h-full gap-2 p-10 bg-white rounded-2xl item-between'>
          {/* 제목 + 검색 바 + 아이템 리스트 */}
          <div className='w-1/2'>
            <h2 className={`mb-4 text-xl font-bold ${theme.title}`}>{title}</h2>
            <SearchInput
              value={query}
              onChange={handleSearch}
              placeholder='어떤 것이든 검색해보세요!'
            />
            {isLoading && <div className='text-gray-400'>검색 중...</div>}
            {error && <div className='text-gray-400'>{error}</div>}
            <SearchList
              items={results}
              type={type}
              onItemClick={setSelectedItem}
            />
          </div>
          {/* 검색 결과 */}
          <div className='w-1/2 pl-8'>
            <SearchResult
              item={selectedItem}
              type={type}
              isLoading={isLoading}
              error={error}
              items={results}
              onSelect={onSelect}
              onClose={onClose}
            />
          </div>
        </div>
      </div>
    </ModalBackground>
  );
};

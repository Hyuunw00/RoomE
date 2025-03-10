import BookReviewDisplay from './components/BookReviewDisplay';
import NotFoundPage from '@pages/NotFoundPage';
import tempIMG from '@assets/book/temp.jpg';
import { BookReviewData } from '@/types/book';
import { truncateTitle } from '@/utils/truncate';
import { twMerge } from 'tailwind-merge';

const BOOK_TITLE_MAX_LENGTH = 15;
const BOOK_AUTHOR_MAX_LENGTH = 20;

interface BookViewerPageProps {
  reviewData: BookReviewData | null;
  bookId?: string;
}

const BookViewerPage = ({ reviewData, bookId }: BookViewerPageProps) => {
  if (!reviewData) return <NotFoundPage />;

  return (
    <section className='flex w-full h-screen overflow-auto'>
      <figure className='w-1/2 h-full p-4'>
        <ul className='w-full h-full rounded-2xl overflow-hidden relative'>

          <BookCoverList className='h-[30%]' />
          <BookCoverList className='h-[40%]'>
            <div className='flex items-center justify-center relative w-68 h-90'>
              <img
                src={reviewData.imageUrl || tempIMG}
                alt={reviewData.title}
                className='object-cover rounded-2xl select-none pointer-events-none w-full h-full book-gradient'
                style={{
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                }}
              />
            </div>
          </BookCoverList>
          <BookCoverList className='h-[30%]' />
        </ul>
      </figure>
      <article className='w-1/2 h-full scroll-smooth'>
        <BookReviewDisplay
          mode='view'
          previewData={reviewData}
          bookId={bookId}
        />
      </article>
    </section>
  );
};

export default BookViewerPage;

const BookCoverList = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <li
      className={twMerge(
        'w-full h-[33.3%] bg-[#D1E5F1] shadow-[inset_0px_4px_20px_5px_rgba(30,146,215,0.20)] flex justify-center items-end',
        className,
      )}>
      {children}
    </li>
  );
};

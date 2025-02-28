import { BookReviewData } from '@/types/book';
import { BOOK_THEME, BookThemeType } from '@/constants/bookTheme';
import scrollDownIcon from '@assets/book/scroll-down-icon.svg';

interface ReviewField {
  key: keyof BookReviewData;
  title: string;
}

interface ReviewContentProps {
  reviewFields: ReviewField[];
  reviewData: BookReviewData;
  colors: (typeof BOOK_THEME)[BookThemeType];
  mode: 'preview' | 'view';
  onEdit: () => void;
  onDelete: () => void;
}

const ReviewSection = ({
  id,
  title,
  content,
  colors,
}: {
  id: string;
  title: string;
  content: string;
  colors: (typeof BOOK_THEME)[BookThemeType];
}) => (
  <div
    id={id}
    className='mb-6'>
    <h2
      className='mb-2 text-2xl font-semibold'
      style={{ color: colors.primary }}>
      {title}
    </h2>
    <p
      className='text-lg'
      style={{ color: colors.secondary }}>
      {content}
    </p>
  </div>
);

export const ReviewContent = ({
  reviewFields,
  reviewData,
  colors,
  mode,
  onEdit,
  onDelete,
}: ReviewContentProps) => (
  <>
    <div className='mb-12 item-between'>
      <p
        className='py-16 text-sm'
        style={{ color: `${colors.primary}80` }}>
        {reviewData.writeDateTime}
      </p>
      <button
        onClick={() => {
          const section = document.getElementById('section-quote');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className='gap-2 px-6 py-3 text-xl border-2 rounded-full item-middle'
        style={{
          borderColor: colors.primary,
        }}>
        Scroll Down
        <img
          src={scrollDownIcon}
          alt='scroll-down-icon'
        />
      </button>
    </div>

    {reviewFields.map(
      ({ key, title }) =>
        reviewData[key] && (
          <ReviewSection
            key={key}
            id={`section-${key}`}
            title={title}
            content={
              Array.isArray(reviewData[key])
                ? reviewData[key].join(', ')
                : reviewData[key]!
            }
            colors={colors}
          />
        ),
    )}

    {reviewData.freeform && (
      <div
        className='mt-8 prose-sm prose'
        style={{ color: colors.secondary }}
        dangerouslySetInnerHTML={{
          __html: reviewData.freeform.replace(
            /<(h[2-5])>/g,
            (_, tag) => `<${tag} id="heading-$1">`,
          ),
        }}
      />
    )}

    {mode === 'view' && (
      <div className='gap-3 mt-8 item-middle'>
        <button
          onClick={onEdit}
          className='px-4 py-2 text-sm transition-colors rounded-full hover:opacity-80'
          style={{
            backgroundColor: `${colors.secondary}20`,
            color: colors.secondary,
          }}>
          수정
        </button>
        <button
          onClick={onDelete}
          className='px-4 py-2 text-sm transition-colors rounded-full hover:opacity-80'
          style={{
            backgroundColor: `${colors.secondary}20`,
            color: colors.secondary,
          }}>
          삭제
        </button>
      </div>
    )}
  </>
);

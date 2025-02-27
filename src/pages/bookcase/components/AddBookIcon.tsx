interface AddBookIconProps {
  fill?: string;
  className?: string;
}

const AddBookIcon = ({ fill = 'white', className = '' }: AddBookIconProps) => {
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        className={className}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.54898 1.2721C5.91861 -0.416456 8.3229 -0.426965 8.70726 1.25829L8.72635 1.34234C8.73946 1.40013 8.75166 1.4541 8.76477 1.50992C9.24398 3.55093 10.8957 5.11046 12.9634 5.47016C14.7229 5.77628 14.7229 8.3022 12.9634 8.60832C10.8847 8.96995 9.22639 10.5442 8.7572 12.6013L8.70726 12.8202C8.3229 14.5055 5.91861 14.4949 5.54898 12.8064L5.50787 12.6185C5.05585 10.5537 3.39954 8.96752 1.31706 8.60521C-0.439012 8.29971 -0.439025 5.77877 1.31706 5.47327C3.39229 5.11223 5.04432 3.53582 5.50308 1.4815L5.53364 1.34242L5.54898 1.2721ZM20.671 7.03038C21.0291 6.87972 21.4136 6.80209 21.802 6.80209C22.1904 6.80209 22.5749 6.87972 22.933 7.03038C23.2897 7.18053 23.613 7.4002 23.884 7.67662L23.8869 7.67946L26.3484 10.1604C26.6202 10.4308 26.8362 10.7522 26.9835 11.1061C27.1317 11.4615 27.2079 11.8426 27.2079 12.2276C27.2079 12.6125 27.1317 12.9937 26.9835 13.349C26.836 13.7031 26.6202 14.0245 26.3482 14.295L26.3453 14.2979L14.2975 26.4234C14.1355 26.5865 13.9209 26.6868 13.6919 26.7067L7.85993 27.2121C7.57397 27.237 7.29166 27.1342 7.08869 26.9312C6.88573 26.7281 6.78286 26.4458 6.80762 26.1598L7.31307 20.3278C7.33291 20.0988 7.43328 19.8844 7.59634 19.7223L19.7225 7.67396C19.9929 7.39881 20.3152 7.18005 20.671 7.03038Z'
        fill={fill}
      />
    </svg>
  );
};

export default AddBookIcon;

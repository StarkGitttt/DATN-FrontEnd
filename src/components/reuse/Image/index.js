import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, name, ...props }, ref) => {
   const [fallback, setFallback] = useState('');

   const handleErrLoadingImg = () => {
      setFallback(customFallback);
   };

   return (
      <img
         ref={ref}
         src={fallback || src}
         className={classNames(className)}
         alt={alt}
         name={name}
         {...props}
         onError={handleErrLoadingImg}
      />
   );
});

export default Image;

import { createPortal } from 'react-dom';
import { LoaderBackdrop, LoaderContent } from './Loader.styled';
import LoaderIcon from './loader.svg';
const loaderRoot = document.querySelector('#loader-root');

export default function Loader() {
  return createPortal(
    <LoaderBackdrop>
      <LoaderContent>
        <img src={LoaderIcon} alt="React Logo" width={300} />
      </LoaderContent>
    </LoaderBackdrop>,
    loaderRoot
  );
}

import {useEffect} from "react";

const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
};

export default useOutsideClick;

// import { useRef, useState } from "react";
// import useOutsideClick from ".";

// export default function UseOnclickOutsideTest() {
//   const [showContent, setShowContent] = useState(false);
//   const ref = useRef();
//   useOutsideClick(ref, () => setShowContent(false));

//   return (
//     <div>
//       {showContent ? (
//         <div ref={ref}>
//           <h1>This is a random content</h1>
//         </div>
//       ) : (
//         <button onClick={() => setShowContent(true)}>Show Content</button>
//       )}
//     </div>
//   );
// }

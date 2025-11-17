import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

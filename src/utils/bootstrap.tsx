import { type Container, createRoot } from "react-dom/client";
import { type ComponentType } from "react";

const mount = <P extends Record<string, unknown>>(
    RenderedElement: ComponentType<P>,
    rootElement: Container,
    props = {} as P
) => {
    const root = createRoot(rootElement);
    root.render(<RenderedElement {...props} />);
};

export default mount;
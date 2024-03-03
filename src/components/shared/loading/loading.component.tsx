import "./loading.css";

type LoadingProps = {
    "first-color"?: string;
    "second-color"?: string;
    size: string;
    thickness: string;
  };

  const defaultProps: LoadingProps = {
    "first-color": "oklch(var(--p))",
    "second-color": "oklch(var(--s))",
    size: "w-48 h-48",
    thickness: "border-8"
  };

function Loading(props: LoadingProps) {
    return (
        <div
            className={`loading ${props.size} ${props.thickness}`}
            style={{
                background: `linear-gradient(${props["first-color"]}, ${props["second-color"]}) border-box`
            }}
    ></div>
    );
}

Loading.defaultProps = defaultProps;

export default Loading;
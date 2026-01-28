// @ts-ignore
import { ThreeDots } from "react-loader-spinner";

function AppLoader() {
  return (
    <div className="flex justify-center align-center text-center h-full">
      <ThreeDots
        height="100"
        width="100"
        radius="10"
        color="#4db5ff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
}

export default AppLoader;

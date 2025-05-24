import { CustomButton } from "@/components/common/custom-button";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div>
      Custom Button Examples
      <div className="mx-auto flex max-w-3xl items-center justify-center gap-x-3 rounded border p-4">
        <Button>ShadCN</Button>

        <CustomButton>Normal</CustomButton>
        <CustomButton variant="solid-rounded">Rounded</CustomButton>
        <CustomButton variant="solid-rounded-full">Rounded</CustomButton>
        <CustomButton variant="outline-full">Outline Full</CustomButton>
        <CustomButton variant="outline-rounded">Outline Rounded</CustomButton>
        <CustomButton disabled>Disabled</CustomButton>
        <CustomButton buttonLoadingText="Loading..." isButtonLoading>
          Loading
        </CustomButton>
      </div>
    </div>
  );
}

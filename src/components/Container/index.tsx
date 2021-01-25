import { Wrapper } from "./StyledContainer";
export const Container: React.FC = ({ children }) => {
  return (
    <Wrapper className="min-h-full bg-gray-700 relative">{children}</Wrapper>
  );
};

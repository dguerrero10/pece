import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomSecondaryButtonRoot = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: transparent;
  padding: 12px 24px;
  border-radius: 8px;
  color: ${blue[500]};
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};

  &:hover {
    background-color: rgb(243, 243, 243);
  }

  &.${buttonUnstyledClasses.active} {
    background-color: rgb(243, 243, 243);
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function CustomSecondaryButton(props) {
    return <ButtonUnstyled {...props} component={CustomSecondaryButtonRoot} />;
  }
  
  export default function SecondaryButton(props) {
    return <CustomSecondaryButton type={props.type}
      onClick={props.onClick}
    >{props.children}</CustomSecondaryButton>
  }
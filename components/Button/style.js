import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: .7rem 2.5rem;
  font-size: ${props => props.theme.font.size.sm}rem;
  color: white;
  background-color: ${props => props.theme.color.brand};
  border: ${props => props.theme.border.width.base}px solid ${props => props.theme.color.brand};
  border-radius: ${props => props.theme.border.radius.base}px;

  transition: all ${props => props.theme.transition.duration.base}s cubic-bezier(${props => props.theme.transition.function.cubic});

  &:hover {
    border: ${props => props.theme.border.width.base}px solid rgba(0, 0, 0, 0);
    background-color: ${props => props.theme.color.link};
  }
`;

export default StyledButton;

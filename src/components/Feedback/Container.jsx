import PropTypes from "prop-types";
import { Wrapper, Title } from './FeedbackFormStyled';

const Container = ({ title, children }) => {
    return (
        <Wrapper>
            {title && <Title>{title}</Title>}
        {children}
        </Wrapper>
    )
}

Container.propTypes = {
        title: PropTypes.string,
}

export { Container };
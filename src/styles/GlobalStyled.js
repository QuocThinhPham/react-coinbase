import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    body {
        font-family: ${({ theme }) => theme.font.primary};
        font-size: ${({ theme }) => theme.text.base};
        font-weight: ${({ theme }) => theme.font.normal};
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    img,
    picture,
    video,
    canvas,
    svg  {
        display: block;
        max-width: 100%;
    }
    input,
    button,
    textarea,
    select {
        font: inherit;
        outline: none;
        border: none;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }
    ul, li {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;

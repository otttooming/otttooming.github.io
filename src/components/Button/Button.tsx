import styled from '@emotion/styled';

export const Button = styled.button`
        display: inline-flex;
        appearance: none;
        align-items: center;
        justify-content: center;
        transition: all 250ms;
        user-select: none;
        position: relative;
        white-space: nowrap;
        vertical-align: middle;
        outline: none;
        width: auto;
        line-height: 1.2;
        border-radius: 0.375rem;
        font-weight: 600;
        height: 1.5rem;
        min-width: 1.5rem;
        font-size: 0.75rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        background: rgba(255, 255, 255, 0.08);
        margin-right: var(--space-s);

    &:focus,
    &[data-focus] {
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
    }

    &[disabled],
    &[disabled]:focus,
    &[disabled]:hover,
    &[aria-disabled=true],
    &[aria-disabled=true]:focus,
    &[aria-disabled=true]:hover,
    &[data-disabled],
    &[data-disabled]:focus,
    &[data-disabled]:hover {
        opacity: 0.4;
        cursor: not-allowed;
        box-shadow: none;
    }

    &:hover,
    &[data-hover] {
        background: rgba(255, 255, 255, 0.16);
    }

    &:hover[disabled],
    &[data-hover][disabled],
    &:hover[disabled]:focus,
    &[data-hover][disabled]:focus,
    &:hover[disabled]:hover,
    &[data-hover][disabled]:hover,
    &:hover[aria-disabled=true],
    &[data-hover][aria-disabled=true],
    &:hover[aria-disabled=true]:focus,
    &[data-hover][aria-disabled=true]:focus,
    &:hover[aria-disabled=true]:hover,
    &[data-hover][aria-disabled=true]:hover,
    &:hover[data-disabled],
    &[data-hover][data-disabled],
    &:hover[data-disabled]:focus,
    &[data-hover][data-disabled]:focus,
    &:hover[data-disabled]:hover,
    &[data-hover][data-disabled]:hover {
        background: rgba(255, 255, 255, 0.08);
    }

    &:active,
    &[data-active] {
        background: rgba(255, 255, 255, 0.24);
    }
`;

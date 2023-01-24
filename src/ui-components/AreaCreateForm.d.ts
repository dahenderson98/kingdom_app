/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AreaCreateFormInputValues = {
    name?: string;
    dl?: string;
    phone_number?: string;
    apt_address?: string;
    notes?: string;
};
export declare type AreaCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    dl?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
    apt_address?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AreaCreateFormOverridesProps = {
    AreaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    dl?: PrimitiveOverrideProps<TextFieldProps>;
    phone_number?: PrimitiveOverrideProps<TextFieldProps>;
    apt_address?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AreaCreateFormProps = React.PropsWithChildren<{
    overrides?: AreaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AreaCreateFormInputValues) => AreaCreateFormInputValues;
    onSuccess?: (fields: AreaCreateFormInputValues) => void;
    onError?: (fields: AreaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AreaCreateFormInputValues) => AreaCreateFormInputValues;
    onValidate?: AreaCreateFormValidationValues;
} & React.CSSProperties>;
export default function AreaCreateForm(props: AreaCreateFormProps): React.ReactElement;

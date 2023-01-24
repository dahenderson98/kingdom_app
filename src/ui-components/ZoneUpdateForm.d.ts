/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Zone } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ZoneUpdateFormInputValues = {
    name?: string;
    note?: string;
};
export declare type ZoneUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    note?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ZoneUpdateFormOverridesProps = {
    ZoneUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    note?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ZoneUpdateFormProps = React.PropsWithChildren<{
    overrides?: ZoneUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    zone?: Zone;
    onSubmit?: (fields: ZoneUpdateFormInputValues) => ZoneUpdateFormInputValues;
    onSuccess?: (fields: ZoneUpdateFormInputValues) => void;
    onError?: (fields: ZoneUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ZoneUpdateFormInputValues) => ZoneUpdateFormInputValues;
    onValidate?: ZoneUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ZoneUpdateForm(props: ZoneUpdateFormProps): React.ReactElement;

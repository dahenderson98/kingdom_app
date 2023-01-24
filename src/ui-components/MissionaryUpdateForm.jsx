/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Missionary } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MissionaryUpdateForm(props) {
  const {
    id: idProp,
    missionary,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    first_name: "",
    last_name: "",
    sex: undefined,
    can_drive: false,
    is_senior_companion: false,
    language: undefined,
    joined_mission: "",
    leaving_mission: "",
    hometown: "",
    notes: "",
  };
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [sex, setSex] = React.useState(initialValues.sex);
  const [can_drive, setCan_drive] = React.useState(initialValues.can_drive);
  const [is_senior_companion, setIs_senior_companion] = React.useState(
    initialValues.is_senior_companion
  );
  const [language, setLanguage] = React.useState(initialValues.language);
  const [joined_mission, setJoined_mission] = React.useState(
    initialValues.joined_mission
  );
  const [leaving_mission, setLeaving_mission] = React.useState(
    initialValues.leaving_mission
  );
  const [hometown, setHometown] = React.useState(initialValues.hometown);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = missionaryRecord
      ? { ...initialValues, ...missionaryRecord }
      : initialValues;
    setFirst_name(cleanValues.first_name);
    setLast_name(cleanValues.last_name);
    setSex(cleanValues.sex);
    setCan_drive(cleanValues.can_drive);
    setIs_senior_companion(cleanValues.is_senior_companion);
    setLanguage(cleanValues.language);
    setJoined_mission(cleanValues.joined_mission);
    setLeaving_mission(cleanValues.leaving_mission);
    setHometown(cleanValues.hometown);
    setNotes(cleanValues.notes);
    setErrors({});
  };
  const [missionaryRecord, setMissionaryRecord] = React.useState(missionary);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Missionary, idProp)
        : missionary;
      setMissionaryRecord(record);
    };
    queryData();
  }, [idProp, missionary]);
  React.useEffect(resetStateValues, [missionaryRecord]);
  const validations = {
    first_name: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    sex: [],
    can_drive: [],
    is_senior_companion: [],
    language: [],
    joined_mission: [],
    leaving_mission: [],
    hometown: [],
    notes: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          first_name,
          last_name,
          sex,
          can_drive,
          is_senior_companion,
          language,
          joined_mission,
          leaving_mission,
          hometown,
          notes,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Missionary.copyOf(missionaryRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MissionaryUpdateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name: value,
              last_name,
              sex,
              can_drive,
              is_senior_companion,
              language,
              joined_mission,
              leaving_mission,
              hometown,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name: value,
              sex,
              can_drive,
              is_senior_companion,
              language,
              joined_mission,
              leaving_mission,
              hometown,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <SelectField
        label="Sex"
        placeholder="Please select an option"
        isDisabled={false}
        value={sex}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              sex: value,
              can_drive,
              is_senior_companion,
              language,
              joined_mission,
              leaving_mission,
              hometown,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.sex ?? value;
          }
          if (errors.sex?.hasError) {
            runValidationTasks("sex", value);
          }
          setSex(value);
        }}
        onBlur={() => runValidationTasks("sex", sex)}
        errorMessage={errors.sex?.errorMessage}
        hasError={errors.sex?.hasError}
        {...getOverrideProps(overrides, "sex")}
      >
        <option
          children="Male"
          value="MALE"
          {...getOverrideProps(overrides, "sexoption0")}
        ></option>
        <option
          children="Female"
          value="FEMALE"
          {...getOverrideProps(overrides, "sexoption1")}
        ></option>
      </SelectField>
      <SwitchField
        label="Can drive"
        defaultChecked={false}
        isDisabled={false}
        isChecked={can_drive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              sex,
              can_drive: value,
              is_senior_companion,
              language,
              joined_mission,
              leaving_mission,
              hometown,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.can_drive ?? value;
          }
          if (errors.can_drive?.hasError) {
            runValidationTasks("can_drive", value);
          }
          setCan_drive(value);
        }}
        onBlur={() => runValidationTasks("can_drive", can_drive)}
        errorMessage={errors.can_drive?.errorMessage}
        hasError={errors.can_drive?.hasError}
        {...getOverrideProps(overrides, "can_drive")}
      ></SwitchField>
      <SwitchField
        label="Is senior companion"
        defaultChecked={false}
        isDisabled={false}
        isChecked={is_senior_companion}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              sex,
              can_drive,
              is_senior_companion: value,
              language,
              joined_mission,
              leaving_mission,
              hometown,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.is_senior_companion ?? value;
          }
          if (errors.is_senior_companion?.hasError) {
            runValidationTasks("is_senior_companion", value);
          }
          setIs_senior_companion(value);
        }}
        onBlur={() =>
          runValidationTasks("is_senior_companion", is_senior_companion)
        }
        errorMessage={errors.is_senior_companion?.errorMessage}
        hasError={errors.is_senior_companion?.hasError}
        {...getOverrideProps(overrides, "is_senior_companion")}
      ></SwitchField>
      <SelectField
        label="Language"
        placeholder="Please select an option"
        isDisabled={false}
        value={language}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              sex,
              can_drive,
              is_senior_companion,
              language: value,
              joined_mission,
              leaving_mission,
              hometown,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.language ?? value;
          }
          if (errors.language?.hasError) {
            runValidationTasks("language", value);
          }
          setLanguage(value);
        }}
        onBlur={() => runValidationTasks("language", language)}
        errorMessage={errors.language?.errorMessage}
        hasError={errors.language?.hasError}
        {...getOverrideProps(overrides, "language")}
      >
        <option
          children="English"
          value="ENGLISH"
          {...getOverrideProps(overrides, "languageoption0")}
        ></option>
        <option
          children="Spanish"
          value="SPANISH"
          {...getOverrideProps(overrides, "languageoption1")}
        ></option>
        <option
          children="Mandarin"
          value="MANDARIN"
          {...getOverrideProps(overrides, "languageoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Joined mission"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={joined_mission && convertToLocal(new Date(joined_mission))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              sex,
              can_drive,
              is_senior_companion,
              language,
              joined_mission: value,
              leaving_mission,
              hometown,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.joined_mission ?? value;
          }
          if (errors.joined_mission?.hasError) {
            runValidationTasks("joined_mission", value);
          }
          setJoined_mission(value);
        }}
        onBlur={() => runValidationTasks("joined_mission", joined_mission)}
        errorMessage={errors.joined_mission?.errorMessage}
        hasError={errors.joined_mission?.hasError}
        {...getOverrideProps(overrides, "joined_mission")}
      ></TextField>
      <TextField
        label="Leaving mission"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={leaving_mission && convertToLocal(new Date(leaving_mission))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              sex,
              can_drive,
              is_senior_companion,
              language,
              joined_mission,
              leaving_mission: value,
              hometown,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.leaving_mission ?? value;
          }
          if (errors.leaving_mission?.hasError) {
            runValidationTasks("leaving_mission", value);
          }
          setLeaving_mission(value);
        }}
        onBlur={() => runValidationTasks("leaving_mission", leaving_mission)}
        errorMessage={errors.leaving_mission?.errorMessage}
        hasError={errors.leaving_mission?.hasError}
        {...getOverrideProps(overrides, "leaving_mission")}
      ></TextField>
      <TextField
        label="Hometown"
        isRequired={false}
        isReadOnly={false}
        value={hometown}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              sex,
              can_drive,
              is_senior_companion,
              language,
              joined_mission,
              leaving_mission,
              hometown: value,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.hometown ?? value;
          }
          if (errors.hometown?.hasError) {
            runValidationTasks("hometown", value);
          }
          setHometown(value);
        }}
        onBlur={() => runValidationTasks("hometown", hometown)}
        errorMessage={errors.hometown?.errorMessage}
        hasError={errors.hometown?.hasError}
        {...getOverrideProps(overrides, "hometown")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              sex,
              can_drive,
              is_senior_companion,
              language,
              joined_mission,
              leaving_mission,
              hometown,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || missionary)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || missionary) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

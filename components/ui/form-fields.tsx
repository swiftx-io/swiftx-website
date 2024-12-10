'use client';

import * as React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from './form';
import { Input } from './input';
import { Textarea } from './textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Control, ControllerRenderProps } from 'react-hook-form';

interface BaseFormFieldProps<T extends Record<string, unknown>> {
  readonly control: Control<T>;
  readonly name: keyof T;
  readonly label: string;
  readonly required?: boolean;
  readonly className?: string;
  readonly children: (field: ControllerRenderProps<T, keyof T>) => React.ReactNode;
}

function BaseFormField<T extends Record<string, unknown>>({
  control,
  name,
  label,
  required = false,
  className,
  children,
}: BaseFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>
            {label}
            {required && ' *'}
          </FormLabel>
          <FormControl>{children(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

interface InputFormFieldProps<T extends Record<string, unknown>>
  extends Omit<BaseFormFieldProps<T>, 'children'> {
  readonly type?: 'text' | 'email' | 'tel';
  readonly placeholder?: string;
}

interface TextareaFormFieldProps<T extends Record<string, unknown>>
  extends Omit<BaseFormFieldProps<T>, 'children'> {
  readonly rows?: number;
  readonly placeholder?: string;
}

interface SelectFormFieldProps<T extends Record<string, unknown>>
  extends Omit<BaseFormFieldProps<T>, 'children'> {
  readonly options: { value: string; label: string }[];
  readonly placeholder?: string;
}

export function CustomInputField<T extends Record<string, unknown>>({
  type = 'text',
  placeholder,
  ...props
}: InputFormFieldProps<T>) {
  return (
    <BaseFormField {...props}>
      {field => <Input type={type} {...field} placeholder={placeholder} />}
    </BaseFormField>
  );
}

export function CustomTextareaField<T extends Record<string, unknown>>({
  rows = 4,
  placeholder,
  ...props
}: TextareaFormFieldProps<T>) {
  return (
    <BaseFormField {...props}>
      {field => <Textarea rows={rows} {...field} placeholder={placeholder} />}
    </BaseFormField>
  );
}

export function CustomSelectField<T extends Record<string, unknown>>({
  options,
  placeholder,
  ...props
}: SelectFormFieldProps<T>) {
  return (
    <BaseFormField {...props}>
      {field => (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </BaseFormField>
  );
}

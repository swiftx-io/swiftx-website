'use client';

import * as React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from './form';
import { Input } from './input';
import { Textarea } from './textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Control, ControllerRenderProps } from 'react-hook-form';
import { ContactFormData } from '@/lib/schemas/contact-form';

interface BaseFormFieldProps {
  readonly control: Control<ContactFormData>;
  readonly name: keyof ContactFormData;
  readonly label: string;
  readonly required?: boolean;
  readonly className?: string;
  readonly children: (
    field: ControllerRenderProps<ContactFormData, keyof ContactFormData>
  ) => React.ReactNode;
}

function BaseFormField({
  control,
  name,
  label,
  required = false,
  className,
  children,
}: BaseFormFieldProps) {
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

interface InputFormFieldProps extends Omit<BaseFormFieldProps, 'children'> {
  readonly type?: 'text' | 'email' | 'tel';
  readonly placeholder?: string;
}

interface TextareaFormFieldProps extends Omit<BaseFormFieldProps, 'children'> {
  readonly rows?: number;
  readonly placeholder?: string;
}

interface SelectFormFieldProps extends Omit<BaseFormFieldProps, 'children'> {
  readonly options: { value: string; label: string }[];
  readonly placeholder?: string;
}

export function CustomInputField({ type = 'text', placeholder, ...props }: InputFormFieldProps) {
  return (
    <BaseFormField {...props}>
      {field => <Input type={type} {...field} placeholder={placeholder} />}
    </BaseFormField>
  );
}

export function CustomTextareaField({ rows = 4, placeholder, ...props }: TextareaFormFieldProps) {
  return (
    <BaseFormField {...props}>
      {field => <Textarea rows={rows} {...field} placeholder={placeholder} />}
    </BaseFormField>
  );
}

export function CustomSelectField({ options, placeholder, ...props }: SelectFormFieldProps) {
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

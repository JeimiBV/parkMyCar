import { useFormContext } from "react-hook-form";
import { Controller } from 'react-hook-form';
import Select from 'react-select';

export const SelectMulti = ({
    name,
    options,
    values,
    handleSelect,
    rules = {},
}) => {
    const { register, control } = useFormContext();

    return (
        <Controller
            control={control}
            {...register(name, rules)}
            render={({ field: { onChange, value, ref } }) => (
                <Select
                    ref={ref}
                    className={'opcionesNot'}
                    placeholder="Seleccionar"
                    options={options}
                    value={values}
                    onChange={(selected) => {
                        selected.length && selected.find((opt) => opt.value === "all")
                            ? handleSelect(options.slice(1))
                            : handleSelect(selected);
                    }}
                    isMulti
                />
            )}
        />
    );
};

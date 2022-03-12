import { Box, InputAdornment, TextField } from '@mui/material';
import { Rupee } from 'assets';
import { Field, FieldProps } from 'formik';
import useFormatter from 'hooks/useFormatter';

type MuiPriceFieldProps = {
	name: string;
	label?: string;
	disabled?: boolean;
};

const MuiPriceField = (props: MuiPriceFieldProps) => {
	const { formatPrice } = useFormatter();
	const { name, label, ...rest } = props;
	return (
		<Field name={name}>
			{({ field, form }: FieldProps) => {
				console.log('🚀 ~ file: MuiPriceField.tsx ~ line 44 ~ MuiPriceField ~ field', field.value);
				return (
					<Box my={1} display='flex' justifyContent='center'>
						<TextField
							placeholder='0'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start' sx={{ fontSize: '3rem' }}>
										<Rupee />
									</InputAdornment>
								),
								disableUnderline: true,
							}}
							inputProps={{
								maxLength: 6,
								style: { fontSize: 50, width: '220px' },
							}}
							variant='standard'
							label={label}
							error={form.errors[name] && form.touched[name] ? true : false}
							helperText={form.errors[name] && form.touched[name] ? form.errors[name] : null}
							{...rest}
							{...field}
						/>
					</Box>
				);
			}}
		</Field>
	);
};

export default MuiPriceField;
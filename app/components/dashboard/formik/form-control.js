import Input from './input';
import Select from './select';
import Radio from './radio';

function FormControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <Radio {...rest} />;
  }
}

export default FormControl;

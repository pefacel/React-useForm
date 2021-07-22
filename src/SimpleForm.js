import { useForm } from './useForm';

const SimpleForm = () => {

    const [formState, handleInputChange] = useForm({
        name: '',
        email: ''
    })

    const { name, email } = formState;


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(formState)

    }


    return (
        <>

            <form onSubmit={handleSubmit}>

                <input
                    type='text'
                    name='name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}

                />

                <input
                    type='text'
                    name='email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}

                />

                <button type='submit' children='Guardar' />

            </form>
        </>
    )
}

export default SimpleForm

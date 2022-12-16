
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InputGroup({ label, name, type = "text", errors = false, ...rest }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium first-letter:uppercase text-gray-700">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type={type}
          {...rest}
          name={name}
          id={name}
          className={classNames("block w-full rounded-md border-gray-300 shadow-sm sm:text-sm", errors ? 'border-red-300 pr-10 focus:border-red-500 focus:outline-none focus:ring-red-500 ' : '')}
          aria-invalid="true"
          aria-describedby="email-error"
        />
        {
          errors &&
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        }

      </div>
      {errors && <p className="mt-2 text-sm text-red-600" id="email-error">
        Your password must be less than 4 characters.
      </p>}

    </div>
  )
}


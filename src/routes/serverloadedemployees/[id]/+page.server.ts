import _employees from '$lib/data/employees.json';
import { blankEmployee, type Employee } from '../../../types';

export function load({ params }) {
	const _employee = _employees.find((m) => String(m.employeeID) === params.id);

	if (_employee) {
		const employee: Employee = {
			employeeID: _employee.employeeID,
			firstName: _employee.firstName,
			lastName: _employee.lastName,
			title: _employee.title,
			notes: _employee.notes
		};
		return {
			employee
		};
	} else {
		return {
			blankEmployee
		};
	}
}

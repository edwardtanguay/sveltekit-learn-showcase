import _employees from '../../data/employees.json';
import type { Employee } from '../../types';

const employees: Employee[] = _employees.map((m) => ({
	employeeID: m.employeeID,
	firstName: m.firstName,
	lastName: m.lastName,
	title: m.title,
	notes: m.notes
}));

export function load() {
	return {
		employees
	};
}

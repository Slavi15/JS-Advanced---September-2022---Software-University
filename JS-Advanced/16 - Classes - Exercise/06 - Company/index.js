class Company {
    departments = new Map();

    addEmployee(name, salary, position, department) {
        if (name === '' || name === undefined || name === null
            || salary === '' || salary === undefined || salary === null
            || position === '' || position === undefined || position === null
            || department === '' || department === undefined || department === null) {
            throw new Error('Invalid input!');
        };

        if (salary < 0) throw new Error('Invalid input!');

        if (!this.departments.has(department)) {
            let workerData = [];
            workerData.push({
                name: name,
                salary: salary,
                position: position
            });
            this.departments.set(department, {
                workerData: workerData,
                salaries: Number(salary)
            });
        } else {
            this.departments.get(department).workerData.push({
                name: name,
                salary: salary,
                position: position
            });
            this.departments.get(department).salaries += Number(salary);
        };
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    };

    bestDepartment() {
        for (let kvp of this.departments) {
            kvp[1].averageSalary = kvp[1].salaries / kvp[1].workerData.length;
        };

        const sortedDepartments = [...this.departments.entries()].sort((a, b) => b[1].averageSalary - a[1].averageSalary);
        for (let kvp of sortedDepartments) {
            kvp[1].workerData.sort((a, b) => b.salary - a.salary || a['name'].localeCompare(b['name']));
        };

        const [firstValues] = sortedDepartments.values();
        let workers = [];
        for (let item of firstValues[1].workerData) {
            workers.push(`${item.name} ${item.salary} ${item.position}`);
        };

        return `Best Department is: ${firstValues[0]}\nAverage salary: ${firstValues[1].averageSalary.toFixed(2)}\n${workers.join('\n')}`;
    };
};

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
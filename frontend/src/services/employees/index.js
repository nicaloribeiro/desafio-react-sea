import api from "../api-config";

const getAll = async () => {
  const employees = await api.get("/employees");
  const { data } = employees;
  return data;
};

const create = async (employee) => {
  const created = await api.post("/employees", employee);
  const { data } = created;
  return data;
};

const update = async (employee) => {
  const { id } = employee;
  const upadated = await api.put(`/employees/${id}`, employee);
  const { data } = upadated;
  return data;
};

const employeesService = {
  getAll,
  create,
  update,
};

export default employeesService;

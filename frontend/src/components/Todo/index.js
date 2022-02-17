//@ts-check

const statusDict = {
  done: "green-100",
  doing: "orange-100",
  pending: "pink-100",
};

const nextStatusDict = {
  done: "pending",
  doing: "done",
  pending: "doing",
};

const Todo = ({ id, name, status, onClick, onDelete }) => {
  const handleClick = () => {
    onClick({ id, name, status: nextStatusDict[status] });
  };

  const handleClickDelete = (e) => {
    onDelete({ name, status, id });
  };

  return (
    <div
      data-testid={`todo-${name}`}
      className={`p-6 max-w-sm mx-auto bg-${statusDict[status]}  rounded-xl shadow-lg flex items-center justify-between space-x-4 m-8`}
    >
      <p
        data-testid={`name-${name}`}
        className="text-xl font-medium text-black"
      >
        {name}
      </p>
      <p
        data-testid={`status-${name}`}
        className={`text-md font-medium text-black`}
        onClick={handleClick}
      >
        {status}
      </p>

      <div
        data-testid={`delete-${name}`}
        onClick={handleClickDelete}
        className="text-red-500 font-bold cursor-pointer"
      >
        DELETE
      </div>
    </div>
  );
};

export default Todo;

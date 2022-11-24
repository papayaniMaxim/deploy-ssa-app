const data = {
    timestamp: "1459500623", // время события
    hook: {
      id: "2", // номер вебхука в системе
      event: "record.before.updated", // тип события
      sequenceId: 84, // порядковый номер сообщения
    },
    payload: {
      catalogId: "5", // каталог с изменениям
      recordId: "199", // запись с изменениям
      values: {
        // список измененных полей и значений в формате API Бипиума
        "2": "Текст",
        "3": null,
        "4": ["1"],
        "5": [{ id: "1", title: "admin" }],
        "6": "2016-04-01T08:49:15.920Z",
        "9": [{ contact: "+7-987-654-32-10", comment: "Сотовый" }],
      },
      prevValues: {
        // предыдущие значения записи
      },
    },
    user: { id: "1" }, // идентификатор сотрудника
}
  
export default data
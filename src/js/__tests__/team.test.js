import Team from "../team";

const charList = [
    {
        name: 'TestChar1',
        health: 100,
    },
    {
        name: 'TestChar1',
        health: 100,
    },
    {
        name: 'TestChar2',
        health: 100,
    },
    {
        name: 'TestChar3',
        health: 50,
    },
    {
        name: 'TestChar4',
        health: 70,
    },
    {
        name: 'TestChar5',
        health: 100,
    }
];
const setMembers = new Set(charList.slice(0, 2));
const setAllMembers = new Set(charList);

test('тестируем добавление персонажа в команду', () => {
    const team = new Team();
    team.add(charList[0]);
    team.add(charList[1]);
    expect(team.members).toEqual(setMembers);
    expect(() => team.add(charList[0])).toThrow();
});

test('тестируем добавление произвольного количества персонажей', () => {
    const team = new Team();
    team.addAll(...charList);
    expect(team.members).toEqual(setAllMembers);
});

test('тестироем преобразование members в массив', () => {
    const team = new Team();
    team.addAll(...charList);
    expect(team.toArray()).toEqual([...setAllMembers]);
});
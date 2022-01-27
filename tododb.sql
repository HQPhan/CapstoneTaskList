-- create database todo;

-- drop table todos;
-- create table todos(
-- 	id int not null auto_increment primary key,
--     FirstName nvarchar(30) not null,
--     LastName nvarchar(30) not null,
--     TaskTitle nvarchar(50) not null,
--     `Description` nvarchar(250) not null,
--     IsCompleted nvarchar(3) not null,
--     DueDate date
-- );

-- alter table todos
-- drop column HoursRequired;
-- alter table todos
-- drop column HoursProgress;

-- insert into todos
-- values(0,'Pumpkin','Wumpkin','Print Packages', 'Review pipeline, check for corrections, print packages, and correspond to clients on a daily basis','No','2022-02-04'),
-- (0,'Cool Aid','Guy','Waterboy', 'Make every team member is hydrated','No','2022-01-31'),
-- (0,'Jan','Itor','Cleaner', 'Make sure working area is clean beginning and end of day','No','2022-02-11'),
-- (0,'Wolf','Sheep','Cook', 'Feed team members breakfast, lunch and dinner','No','2022-01-31'),
-- (0,'Billy','Bob','Singer','Entertain team members while they work','No','2022,01.31'),
-- (0,'The','Leader','Team Leader', 'Lead the team - everyone has to get every done by end of week','No','2022-02-04');

select * from todos;

-- drop database todo;
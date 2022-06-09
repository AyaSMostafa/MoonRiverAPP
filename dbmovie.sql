
create table dbo.category(
CategoryId int identity(1,1),
CategoryName varchar(500)
)
select * from dbo.category
insert into dbo.category values
('Action')
select * from dbo.category
insert into dbo.category values
('Comedy')
select * from dbo.category
insert into dbo.category values
('Drama')
select * from dbo.category
insert into dbo.category values
('Fantasy')
select * from dbo.category
insert into dbo.category values
('Horror')
select * from dbo.category
insert into dbo.category values
('Mystery')
select * from dbo.category
insert into dbo.category values
('Romance')
select * from dbo.category
insert into dbo.category values
('Thriller')
select * from dbo.category
insert into dbo.category values
('Western')
select * from dbo.category
insert into dbo.category values
('Crime Thriller')
insert into dbo.category values
('Psychological Thriller')
insert into dbo.category values
('Psychological horror')

create table dbo.movie(
MovieId int identity(1,1),
MovieName varchar(500),
Category varchar(500),
MovieYear date,
mov_lang varchar(500),
PhotoFileName varchar(500)
)
insert into dbo.movie values
('Vertigo','Psychological Thriller','1958-08-24',
'English','Vertigo.png'
)
insert into dbo.movie values
('The Innocents','Psychological horror','1962-02-19',
'English','TheInnocents.png'
)
insert into dbo.movie values
('Lawrence of Arabia','Drama','1962-12-11',
'English','LawrenceofArabia.png'
)
insert into dbo.movie values
('The Deer Hunter','Drama','1979-03-08',
'English','TheDeerHunter.png'
)
insert into dbo.movie values
('Amadeus','Drama','1985-01-07',
'English','Amadeus.png'
)
insert into dbo.movie values
('Titanic','Romance','1998-01-23',
'English','Titanic.png'
)
insert into dbo.movie values
('Princess Mononoke','Fantasy','2001-10-19',
'Japanese','PrincessMononoke.png'
)
insert into dbo.movie values
('Seven Samurai','Drama','1954-04-26',
'Japanese','SevenSamurai.png'
)
insert into dbo.movie values
('Braveheart','Drama','1995-09-08',
'English','Braveheart.png'
)
select * from dbo.Category
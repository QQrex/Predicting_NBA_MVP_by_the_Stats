CREATE TABLE IF NOT EXISTS teams (
	team_id char(15) NOT NULL,
	team_name char(25),
	abb char(3) NOT NULL,
	city char(20) NOT NULL,
	PRIMARY KEY (team_id)
);

CREATE TABLE IF NOT EXISTS players (
	player_id char(15) NOT NULL,
	player_name varchar(25) NOT NULL,
	PRIMARY KEY (player_id)
);

CREATE TABLE IF NOT EXISTS seasons (
	season_id char(5) NOT NULL,
	season_year varchar(7) NOT NULL,
	start_year int NOT NULL,
	end_year int NOT NULL,
	PRIMARY KEY (season_id)
);

CREATE TABLE IF NOT EXISTS games (
	game_id char(15) NOT NULL,
	team_id char(15) NOT NULL,
	season_id char(7) NOT NULL,
	team_name char(25) NOT NULL,
	abb char(3) NOT NULL,
	wl char(1) NOT NULL,
	PRIMARY KEY (game_id, team_id),
	FOREIGN KEY (team_id) REFERENCES teams (team_id),
	FOREIGN KEY (season_id) REFERENCES seasons (season_id)
);

CREATE TABLE IF NOT EXISTS scoreboards (
	game_id char(15) NOT NULL,
	team_id char(15) NOT NULL,
	abb char(3) NOT NULL,
	city char(20) NOT NULL,
	player_id char(15) NOT NULL,
	player_name varchar(25) NOT NULL,
	status char(3) NOT NULL,
	time_played time NOT NULL,
	fgm int NOT NULL,
	fga int NOT NULL,
	fg_pct float NOT NULL,
	fg3m int NOT NULL,
	fg3a int NOT NULL,
	fg3_pct float NOT NULL,
	ftm int NOT NULL,
	fta int NOT NULL,
	ft_pct float NOT NULL,
	oreb int NOT NULL,
	dreb int NOT NULL,
	reb int NOT NULL,
	ast int NOT NULL,
	stl int NOT NULL,
	blk int NOT NULL,
	turn_over int NOT NULL,
	pf int NOT NULL,
	pts int NOT NULL,
	plus_minus int NOT NULL,
	PRIMARY KEY (game_id, player_id)
);
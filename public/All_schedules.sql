select t1.train_number as 'col1', t1.station_name as 'col2', t1.station_time as 'col3', t2.station_name as 'col4', t2.station_time as 'col5'  
from 
(
select trains.train_id, trains.train_number, stations.station_name, schedules.station_time
from trains, stations, schedules
where schedules.train_id = trains.train_id
and schedules.current_station_id = stations.station_id
and current_station_id = '001' 
and destination_station_id = '005' 
)  t1,
(
	select trains.train_id, stations.station_name, schedules.station_time
	from trains, stations, schedules
	where schedules.train_id = trains.train_id
	and schedules.destination_station_id = stations.station_id
	and current_station_id = '005'
	and destination_station_id = '005' 
) t2
where t1.train_id = t2.train_id;
select t1.train_number as 'col1', t1.station_name as 'col2', t1.station_time as 'col3' from (
select trains.train_number, stations.station_name, schedules.station_time
from trains, stations, schedules
where schedules.train_id = trains.train_id
and schedules.current_station_id = stations.station_id
and destination_station_id = '005') t1
order by col1, col2; 
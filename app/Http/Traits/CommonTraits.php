<?php
namespace App\Http\Traits;

use App\Models\Video;
use App\Models\Employee;
use App\Models\EmployeeImage;
use App\Models\Types;
use App\Models\EventTicker;
use App\Models\Month;
use App\Models\Team;
use App\Models\Event;

trait CommonTraits {



     /*-------------------------- Employees ------------------ */
     public function getEmployeeData($where=array(),$get='first') {

        return Employee::getData($where,$get);
    }

    public function insertEmployeeData($data) {
        return Employee::insertData($data);
    }

    public function updateEmployeeData($data,$id){
        return Employee::updateData($data,$id);
    }

    /*-------------------------- Videos ------------------ */
    public function getVideoData($where=array(),$get='first') {

        return Video::getData($where,$get);
    }

    public function insertVideoData($data) {
        return Video::insertData($data);
    }

    public function updateVideoData($data,$id){
        return Video::updateData($data,$id);
    }

     /*-------------------------- Employees ------------------ */
     public function getImageData($where=array(),$get='first') {

        return EmployeeImage::getData($where,$get);
    }

    public function insertImageData($data) {
        return EmployeeImage::insertData($data);
    }

    public function updateImageData($data,$id){
        return EmployeeImage::updateData($data,$id);
    }
    /*-------------------------- EventTicker ------------------ */
    public function getEventTickerData($where=array(),$get='first') {

        return EventTicker::getData($where,$get);
    }

    public function insertEventTickerData($data) {
        return EventTicker::insertData($data);
    }

    public function updateEventTickerData($data,$id){
        return EventTicker::updateData($data,$id);
    }
     /*-------------------------- Types ------------------ */
     public function getEmployeeTypesData($where=array(),$get='first') {

        return Types::getData($where,$get);
    }

    public function insertEmployeeTypesData($data) {
        return Types::insertData($data);
    }

    public function updateEmployeeTypesData($data,$id){
        return Types::updateData($data,$id);
    }

      /*-------------------------- Months ------------------ */
      public function getMonthsData($where=array(),$get='first') {

        return Month::getData($where,$get);
        }

        public function insertMonthsData($data) {
            return Month::insertData($data);
        }

        public function updateMonthsData($data,$id){
            return Month::updateData($data,$id);
        }

         /*-------------------------- Events ------------------ */
      public function getEventsData($where=array(),$get='first') {

        return Event::getData($where,$get);
        }

        public function insertEventsData($data) {
            return Event::insertData($data);
        }

        public function updateEventsData($data,$id){
            return Event::updateData($data,$id);
        }

        /*-------------------------- Teams ------------------ */
      public function getTeamsData($where=array(),$get='first') {

        return Team::getData($where,$get);
        }

        public function insertTeamsData($data) {
            return Team::insertData($data);
        }

        public function updateTeamsData($data,$id){
            return Team::updateData($data,$id);
        }




}

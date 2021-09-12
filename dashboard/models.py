from django.db import models

class Location(models.Model):
    location_name = models.CharField(max_length=50)
    

    def devices(self):
        if not hasattr(self, '_devices'):
            self._devices = self.location_of_device.all()
        return self._devices

    def __str__(self):
        return self.location_name

class Device(models.Model):
    device_name =  models.CharField(max_length=50)
    location    =  models.ForeignKey(Location,
        on_delete=models.CASCADE ,
        related_name="location_of_device"
            )
    active      =  models.BooleanField()

    def graphs(self):
        if not hasattr(self,'_graghs'):
            self._devices = self.gragh_device.all()
        return self._graghs

class Gragh(models.Model):
    gragh_type =   models.CharField( max_length=50)
    device=models.ForeignKey(Device,
        on_delete=models.CASCADE,
        related_name="gragh_device"
            )
    width      =   models.CharField( max_length=50)
    height     =   models.CharField( max_length=50)
    data_url   =   models.URLField( max_length=200,null=True)
    x_axis     =   models.CharField( max_length=50,null=True)
    y_axis     =   models.CharField( max_length=50,null=True)
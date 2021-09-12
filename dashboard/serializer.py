from rest_framework import serializers
from .models import Location, Device, Gragh

class GraghSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Gragh
        fields = '__all__'

class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = 'id','device_name','active'

class LoacationSerializer(serializers.ModelSerializer):
    devices = DeviceSerializer(read_only=True , many=True)
    class Meta:
        model = Location
        fields = '__all__'
from rest_framework import serializers
from .models import Product, ProductImage


# =========================
# PRODUCT IMAGE SERIALIZER
# =========================
class ProductImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'is_primary']


# =========================
# PRODUCT SERIALIZER (FULL POWER)
# =========================
class ProductSerializer(serializers.ModelSerializer):

    # READ images (GET requests)
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = '__all__'

    # =========================
    # VALIDATION (REAL WORLD RULES)
    # =========================
    def validate_price(self, value):
        if value <= 0:
            raise serializers.ValidationError("Price must be greater than 0")
        return value

    def validate_stock(self, value):
        if value < 0:
            raise serializers.ValidationError("Stock cannot be negative")
        return value

    # =========================
    # CREATE (OPTIONAL IMAGE SUPPORT READY)
    # =========================
    def create(self, validated_data):
        return Product.objects.create(**validated_data)
    
class ImageUploadSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ProductImage
        fields = ['id', 'product', 'image', 'is_primary']
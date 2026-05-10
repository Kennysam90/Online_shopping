from .models import Product, ProductImage
from .serializers import ProductSerializer, ImageUploadSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse


# =========================
# API HOME
# =========================

def api_home(request):
    return JsonResponse({
        "status": "API is running 🚀",
        "endpoints": {
            "products": "/api/products/",
            "product_detail": "/api/products/<id>/",
            "upload_image": "/api/images/upload/"
        }
    })

# =========================
# GET ALL PRODUCTS / CREATE PRODUCT
# =========================
@api_view(['GET', 'POST'])
def product_list(request):

    # 🔍 GET: list products (with optional search)
    if request.method == 'GET':

        query = request.GET.get('q')

        products = Product.objects.all()

        # SIMPLE SEARCH (like Amazon search bar)
        if query:
            products = products.filter(name__icontains=query)

        serializer = ProductSerializer(products, many=True)

        return Response({
            "success": True,
            "count": products.count(),
            "data": serializer.data
        }, status=status.HTTP_200_OK)

    # ➕ POST: create product
    if request.method == 'POST':
        serializer = ProductSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response({
                "success": True,
                "message": "Product created successfully",
                "data": serializer.data
            }, status=status.HTTP_201_CREATED)

        return Response({
            "success": False,
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


# =========================
# GET SINGLE PRODUCT
# =========================
@api_view(['GET'])
def product_detail(request, pk):

    try:
        product = Product.objects.get(id=pk)

    except Product.DoesNotExist:
        return Response({
            "success": False,
            "message": "Product not found"
        }, status=status.HTTP_404_NOT_FOUND)

    serializer = ProductSerializer(product)

    return Response({
        "success": True,
        "data": serializer.data
    }, status=status.HTTP_200_OK)

# =========================
# UPLOAD PRODUCT IMAGE
# =========================

@api_view(['POST'])
def upload_product_image(request):
    serializer = ImageUploadSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({
            "success": True,
            "message": "Image uploaded successfully",
            "data": serializer.data
        }, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# =========================
# GET IMAGES FOR A PRODUCT
# =========================

@api_view(['GET'])
def product_images(request, product_id):
    images = ProductImage.objects.filter(product_id=product_id)
    serializer = ImageUploadSerializer(images, many=True)

    return Response({
        "success": True,
        "count": images.count(),
        "data": serializer.data
    })

# =========================
# SET PRIMARY IMAGE
# =========================

@api_view(['POST'])
def set_primary_image(request, image_id):

    try:
        image = ProductImage.objects.get(id=image_id)
    except ProductImage.DoesNotExist:
        return Response({"error": "Image not found"}, status=404)

    # remove previous primary
    ProductImage.objects.filter(product=image.product).update(is_primary=False)

    image.is_primary = True
    image.save()

    return Response({
        "success": True,
        "message": "Primary image updated"
    })

# =========================
# DELETE PRODUCT IMAGE
# =========================

@api_view(['DELETE'])
def delete_product_image(request, image_id):

    try:
        image = ProductImage.objects.get(id=image_id)
        image.delete()

        return Response({
            "success": True,
            "message": "Image deleted"
        })

    except ProductImage.DoesNotExist:
        return Response({"error": "Image not found"}, status=404)
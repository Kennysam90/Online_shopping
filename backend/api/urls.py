from django.urls import path
from .views import (
    product_list,
    product_detail,
    upload_product_image,
    product_images,
    set_primary_image,
    delete_product_image,
    api_home
)

urlpatterns = [
    path('', api_home),

    path('products/', product_list),
    path('products/<int:pk>/', product_detail),

    path('images/upload/', upload_product_image),
    path('products/<int:product_id>/images/', product_images),
    path('images/<int:image_id>/set-primary/', set_primary_image),
    path('images/<int:image_id>/delete/', delete_product_image),
]
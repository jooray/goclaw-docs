# Context Pruning

> Tự động cắt tỉa kết quả tool cũ để giữ context agent trong giới hạn token.

🚧 **Trang này đang được xây dựng.** Nội dung sẽ sớm được cập nhật.

## Tổng quan

Context Pruning khác với [session compaction](../core-concepts/sessions-and-history.md). Trong khi compaction tóm tắt toàn bộ lịch sử hội thoại, pruning chọn lọc cắt tỉa kết quả tool lớn theo hai giai đoạn: **soft trim** (cắt giữ head+tail) và **hard clear** (thay bằng placeholder). Kích hoạt qua chế độ `cache-ttl`.

## Tiếp theo

- [Sessions & History](../core-concepts/sessions-and-history.md)
- [Memory System](../core-concepts/memory-system.md)
- [Configuration Reference](../reference/config-reference.md)

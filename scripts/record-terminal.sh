#!/bin/bash

# 终端会话录制脚本
# 用法: ./record-terminal.sh [会话名称]

SESSION_NAME=${1:-terminal-session}
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
OUTPUT_DIR="/Users/mm/Projects/cancerlink_v1/terminal-logs"
OUTPUT_FILE="$OUTPUT_DIR/${SESSION_NAME}_${TIMESTAMP}.log"

# 创建输出目录
mkdir -p "$OUTPUT_DIR"

echo "🎬 开始录制终端会话..."
echo "📁 输出文件: $OUTPUT_FILE"
echo "💡 按 Ctrl+D 或输入 'exit' 结束录制"
echo "----------------------------------------"

# 使用 script 命令录制
script -q "$OUTPUT_FILE"

echo "----------------------------------------"
echo "✅ 录制完成！"
echo "📝 会话已保存到: $OUTPUT_FILE"

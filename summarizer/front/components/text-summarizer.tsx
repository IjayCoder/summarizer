"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, FileText, Sparkles, Files } from "lucide-react";
import { SummarizeText } from "@/lib/apiLinks";
import { toast } from "sonner";

export default function Component() {
  const [text, setText] = useState("");
  const [summaryLength, setSummaryLength] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    if (!text.trim() || text.length < 300) return;

    if (!summaryLength || summaryLength <= 0) {
      alert("❌ Please select a valid summary length.");
      return;
    }

    setIsLoading(true);
    setSummary("");

    try {
      const result = await SummarizeText(text, summaryLength);

      setSummary(result.summary);
    } catch (error) {
      setSummary("An error occurred while summarizing the text.");
      toast.error("Error", {
        description: "n error occurred while summarizing the text.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (summary) {
      navigator.clipboard.writeText(summary);
      toast.success("Copied!", {
        description: "Summary copied!",
      });
    }
  };

  const characterCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const summaryLengths = [50, 100, 150, 200, 300];

  // Filter based on the text
  const availableOptions = summaryLengths.filter(
    (option) => option < wordCount // summary <  original text
  );

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Text Summarizer
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform lengthy text into concise, meaningful summaries with our
            intelligent text summarization tool.
          </p>
        </div>

        {/* Input Section */}
        <Card className="shadow-lg border-0 bg-gray-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Input Text
            </CardTitle>
            <CardDescription>
              Paste or type the text you want to summarize below
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Textarea
                placeholder="Enter your text here (between 150 and 5000 words). The more detailed your input, the better the summary will be."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[200px] resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{characterCount} characters</span>
                <span>{wordCount} words</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="space-y-2 flex-1">
                <Label htmlFor="summary-length">Summary Length</Label>
                <Select
                  onValueChange={(value) => setSummaryLength(Number(value))}
                >
                  <SelectTrigger
                    id="summary-length"
                    className="w-full sm:w-[200px]"
                  >
                    <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableOptions.map((opt) => (
                      <SelectItem key={opt} value={opt.toString()}>
                        {opt} words
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleSummarize}
                disabled={
                  !text.trim() ||
                  wordCount < 150 ||
                  wordCount > 5000 ||
                  isLoading
                }
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 h-10"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Summarizing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Summarize
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Result Section */}
        {(isLoading || summary) && (
          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
                Summary Result
              </CardTitle>
              <CardDescription>
                {isLoading
                  ? "Generating your summary..."
                  : `Summary in approximately ${summaryLength} words`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center space-y-4">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto" />
                    <p className="text-gray-600 font-medium">
                      Analyzing and summarizing your text...
                    </p>
                    <p className="text-sm text-gray-500">
                      This may take a few moments
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg p-6 border border-blue-100 relative">
                  <p className="text-gray-800 leading-relaxed text-base mb-4">
                    {summary}
                  </p>

                  <div className="flex justify-end">
                    <Button variant="outline" onClick={handleCopy}>
                      <Files />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>Powered by advanced AI text summarization technology</p>
        </div>
      </div>
    </div>
  );
}

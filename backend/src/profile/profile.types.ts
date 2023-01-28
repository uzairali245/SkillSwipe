import { ApiProperty } from "@nestjs/swagger";
import { BaseRequest } from "src/util/util";

export namespace Profile {
	export class ProfileAddEducationRequest extends BaseRequest {
		@ApiProperty()
		institution: string;

		@ApiProperty()
		degree: string;

		@ApiProperty()
		start_year: number;

		@ApiProperty()
		end_year: number;
	}

	export class ProfileAddCourseRequest extends BaseRequest {
		@ApiProperty()
		courseName: string;

		@ApiProperty()
		courseNumber: string;
	}
		@ApiProperty()
		end_year: number;
	}
}
